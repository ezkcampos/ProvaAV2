import React,{useContext,useState,useEffect} from 'react';
import {UsuarioContext} from '../../contexts/user';
import firebaseApp from '../../services/firebase';
import {getFirestore,addDoc, collection,onSnapshot,query,orderBy} from "firebase/firestore";
import { async } from '@firebase/util';

let Chat=()=>{

    const db = getFirestore(firebaseApp);

    const [messages, setMessages]= useState ([])

    const {user, signOut} = useContext(UsuarioContext)

    let nome = '';
    if (user){
        nome = user.email.split("@", 2);

        nome = nome[0];

        nome = nome.toUpperCase();
    }

    useEffect(()=>{
        const unsub = onSnapshot(query(collection(db,"mensagens"),orderBy('data')),(QuerySnapshot)=>{
            const tmp = [];

            QuerySnapshot.forEach(async(document)=>{
                tmp.push({
                    id: document.id,
                    ...document.data()
                });
            });
            setMessages(tmp);
        });
        return()=>{
            unsub();
        }

    },[]);
    
    const handleMessage = async()=>{
        let inputMensagens = document.getElementById('inputMensagem');
        let data = new Date()
        try{
            if(inputMensagens.value.length <= 30){
                await addDoc(collection(db, 'mensagens'),{
                    mensagem: inputMensagens.value,
                    data: data,
                    idEmail: user.email,
                    nome: nome
                }).then(()=>{
                    inputMensagens.value = inputMensagens.defaultValue;
                });
            }
            else{
                alert("Numero Maximo de Caracteres: 30");
            }
            
        }catch(erro){
            console.log(erro);
        }
    }



return (
    <div>
        <header>
        <h1>Chat {user? user.email : ''}</h1>
        </header>

        <section>
        <div class="chatBody">
                        
                        {messages.map((item)=>(
                            
                            <p key={item.id} class="chatContent">{item.nome} diz: {item.mensagem}</p>
                        ))}
                    </div>

                    <div class="envioMensagem">
                        <input type="text" placeholder="Digite sua mensagem" id="inputMensagem"/>
                        <button type="button" id="btnEnviaMensagem" class="button" onClick={()=>{
                            handleMessage();
                        }}>Enviar</button>
                    </div>
        </section>
        <button type="button" onClick={()=>{signOut()}}>Sair</button>
    </div>
)
} 

export default Chat;