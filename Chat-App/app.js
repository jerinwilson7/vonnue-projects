const davidSelectBtn = document.getElementById('david');
const emmaSelectBtn = document.getElementById('emma');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');
const davidChat = document.getElementById('davidChat');
const emmaChat = document.getElementById('emmaChat');


const messages =JSON.parse(localStorage.getItem('messages')) ||[];




const createMessageElement = (message)=>{
  console.log(davidChat);
  
    
    
    return `<div id="davidChat" class="message ${message.sender === messageSender? 'blue-bg' : 'gray-bg' }">
                <div class="message-sender">${message.sender}</div>
                <div class="message-content">${message.content}</div>
                <div class="message-timestamp">${message.timestamp}</div>
            </div>`
}   


window.onload=()=>{

    messages.forEach((message)=>{
        chatMessages.innerHTML += createMessageElement(message)
    })
}

let messageSender = 'David'

const updateMessageSender = (name)=>{
 messageSender = name;

 chatHeader.textContent = `${messageSender} chatting ...`
 chatInput.placeholder = `Type here ${messageSender}`;

 if(name === 'David'){
    // console.log(davidChat);
    // davidChat.classList.add('grrn')
    
    davidSelectBtn.classList.add('active-sender');
    emmaSelectBtn.classList.remove('active-sender');
    davidChat.classList.add('blue-bg')
    emmaChat.classList.remove('blue-bg')
    emmaChat.classList.add('gray-bg')
 }
 if(name === 'Emma'){
    emmaSelectBtn.classList.add('active-sender');
    davidSelectBtn.classList.remove('active-sender');
    emmaChat.classList.add('blue-bg')
    davidChat.classList.remove('blue-bg')
    davidChat.classList.add('gray-bg')
 }
}

davidSelectBtn.onclick=()=>updateMessageSender('David');
emmaSelectBtn.onclick=()=>updateMessageSender('Emma')

const sendMessage = (e)=>{
    e.preventDefault();

    const timestamp = new Date().toLocaleString('en-Us',
    {
        hour:'numeric',
        minute:'numeric',
        second:"numeric",
        hour12:true,
    });

    console.log(messageSender);
    

    const message = {
        sender:messageSender,
        content:chatInput.value,
        timestamp
    }

    
    messages.push(message)
    localStorage.setItem('messages',JSON.stringify(messages))
    
    
    chatMessages.innerHTML += createMessageElement(message);
    chatInputForm.reset();
    chatMessages.scrollTop = chatMessages.scrollHeight
    
    
    
}

chatInputForm.addEventListener('submit',sendMessage)

clearChatBtn.addEventListener('click',()=>{
    console.log("clear");
    console.log(messageSender);
    
    
    localStorage.clear();
    chatMessages.innerHTML = ''
})