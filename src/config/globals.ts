// TODO: Add support for .env and multiple environments

const config = {
  PORT: 3000,
  DB_URL: 'mongodb+srv://admin:DLaxRTZ8WFILHha4@cawfee.2zshz.mongodb.net/testing?retryWrites=true&w=majority',
  EMAIL :{
    HOST: "email@email.com",
    PORT: 500,
    USER: "username",
    PASS: "password",
    SENDER: "yourtestapp@yourcoolproject.com"
  }
}

export default config