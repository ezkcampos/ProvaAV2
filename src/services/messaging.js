import {db} from '/firebase'

const MessagingService ={
    getMessages() {
        const document = db.collection('mensagens')
        .get()
        .then(mensagens =>{
            let _mensagens = []
            mensagens.forEach(mensagens =>{
                _mensagens.push(mensagens.data())
                console.log(mensagens.data)
            })
            return mensagens
        })
    }
}

export default MessagingService
