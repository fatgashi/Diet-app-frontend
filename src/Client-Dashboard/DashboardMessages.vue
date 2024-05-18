<template>
  <div class="container bg-white  shadow rounded" id="landing-wrapper">
    <section style="background-color: #CDC4F9;">
  <div class="container py-5">

    <div class="row">
      <div class="col-md-12">

        <div class="card" id="chat3" style="border-radius: 15px;">
          <div class="card-body">

            <div class="row">
              <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 border-end border-bottom">

                <div class="p-3">

                  <!-- <div class="input-group rounded mb-3">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </div> -->

                  <div style="position: relative; height: 400px; overflow: auto;">
                    <ul class="list-unstyled mb-0">
                      <li v-for="con in conversations" :key="con._id" class="p-2 border-bottom">
                        <button @click="getUserId(con.userId)" class="border-0 bg-white" style="width: 100%;">
                            <div class="pt-1 d-flex justify-content-center align-items-center">
                              <p class="small text-muted">{{ formatDateAndTime(con.lastMessageTimestamp) }}</p>
                            </div>
                          <div class="d-flex justify-content-around align-items-center">
                              <div class="d-flex justify-content-center align-items-end">
                                <img
                                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                  alt="avatar" class="d-flex align-self-center" width="60">
                                  
                              </div>
                              <div class="pt-1  d-flex flex-column justify-content-center">
                                <p class="fw-bold mb-0">{{ con.name }} {{ con.surname }}</p>
                                <div class="">
                                    <p class="small text-muted">{{ con.lastMessage }}</p>
                                </div>
                              </div>
                              <div v-if="con.unreadMessages != 0">
                                <span class="badge bg-danger rounded-pill float-end">{{ con.unreadMessages }}</span>
                              </div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

              <div class="col-md-6 col-lg-7 col-xl-8">
                <div class="pt-3 pe-3" ref="messageContainer" style="position: relative; height: 400px; overflow: auto;">
                    <div v-for="(group, date) in groupedMessages" :key="date">
                        <div class="d-flex justify-content-center p-5">{{ date }}</div>
                        <div v-for="message in group" :key="message._id">
                            <div v-if="message.senderId == clientId" class="d-flex flex-row justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;">
                            <div>
                                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">{{ message.content }}</p>
                                <p class="small ms-3 mb-3 rounded-3 text-muted float-end">{{ formatDate(message.timestamp) }}</p>
                            </div>
                            </div>
        
                            <div v-else class="d-flex flex-row justify-content-end">
                            <div>
                                <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{{ message.content }}</p>
                                <p class="small me-3 mb-3 rounded-3 text-muted">{{ formatDate(message.timestamp) }}</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;">
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="clientId != null" class="col-12 text-muted d-flex flex-row justify-content-start align-items-center pe-3 pt-3 mt-2">
                  <div class="me-1">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 3" style="width: 40px; height: 100%;">
                  </div>
                  <form class="d-flex justify-content-center col-10" @submit.prevent="sendMessage">

                    <input autocomplete="off" type="textarea" v-model="newMessage" required class="form-control form-control-lg col-12" id="exampleFormControlInput2"
                      placeholder="Type message">
                    <button type="submit" class="ms-3 border-0 bg-white"><i class="fas fa-paper-plane"></i></button>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { getCurrentUser } from '@/methods/userLogic';

export default {
name: "MessageAdmin",
data() {
  return {
    newMessage: '', // Store the message being typed
    messages: [],   // Store chat messages
    user: null,
    socket: null,
    conversations: [],
    clientId: null
  };
},
async created() {
    this.user = await getCurrentUser();
    this.socket = io('http://localhost:3000');

    this.socket.emit('joinRoom', this.user._id);

    this.socket.emit('getAdminConversations');


    this.socket.on('adminConversations', (conversation) => {
    // Handle the list of user IDs received from the server
    this.conversations = conversation;

    this.socket.emit('getAdminConversations');

    });

},
computed: {
    messagess(){
      return this.messages;
    },
    groupedMessages() {
      const grouped = {};
      for (const message of this.messages) {
        const date = this.formatDateGroup(message.timestamp);
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(message);
      }
      return grouped;
    },
},
watch: {
    messagess(newMessages) {
      // Watch for changes in the messages array
      if (newMessages) {
        // New message added, trigger scrolling
        this.scrollToBottom();
      }
    },
  },
methods: {

    initializeSocket(){

        this.socket.on('adminUserMessages', (pastMessages) => {
        // Set the received past messages to the 'messages' data property
          this.messages = pastMessages;
        });

        this.socket.on('message', (data) => {
          this.messages.push(data);
            
        });


    },
    formatDateAndTime(date) {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            year: '2-digit',
            month: 'numeric',
            day: 'numeric',
        };

        // Format the date and time
        const formattedDate = new Date(date).toLocaleDateString(undefined, options);
        
        return formattedDate;
    },
    formatDate(timestamp) {
        const date = new Date(timestamp);
        // Format the date to display just the time portion
        const options = { hour: '2-digit', minute: '2-digit' };
        return date.toLocaleTimeString(undefined, options);
    },

    formatDateGroup(timestamp) {
      // Implement your date formatting logic here, e.g., using moment.js or JavaScript Date methods
      // Example format: "Monday, September 13, 2023"
      const date = new Date(timestamp);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    },
    sendMessage() {
    // Send the message to the server
        this.socket.emit('message', {
            senderId: this.user._id, // Replace with the actual user ID
            receiverId: this.clientId,
            content: this.newMessage,
        });

        this.socket.emit('getAdminConversations');

        // Add the message locally
        this.messages.push({
            senderId: this.user._id,
            receiverId: this.clientId,
            content: this.newMessage,
            timestamp: new Date(),
            read: false,
        });

        // Clear the input field
        this.newMessage = '';
    },
    scrollToBottom() {
        this.$nextTick(() => {
        const container = this.$refs.messageContainer;
        container.scrollTop = container.scrollHeight;
      });
    },
    getUserId(userId){
        this.clientId = userId;

        this.initializeSocket();

        this.socket.emit('getAdminUserMessages', this.clientId);

        this.socket.emit('getAdminConversations');


        setTimeout(() =>{
            this.scrollToBottom();
        }, 500);

    },
},

beforeDestroy(){
    this.socket.disconnect();
}

};
</script>

<style>
#chat3 .form-control {
border-color: transparent;
}

#chat3 .form-control:focus {
border-color: transparent;
box-shadow: inset 0px 0px 0px 1px transparent;
}

.badge-dot {
border-radius: 50%;
height: 10px;
width: 10px;
margin-left: 2.9rem;
margin-top: -.75rem;
}
</style>