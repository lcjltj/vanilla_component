import { Component } from "../common/Component.js";
import LoginForm from "../components/login/LoginForm.js";

export default class Login extends Component {
    setup() {
        this.$state = {};
    }

    template() {
        const {} = this.$state;
        return `
            <h1>로그인</h1>
            <login-form data-component="login-form"></login-form>
            `;
    }

    mounted() {
        const {} = this;
        const $loginForm = this.$target.querySelector('[data-component="login-form"]');

        new LoginForm($loginForm,{
            loginSubmit : loginSubmit.bind(this)
        });
    }
}

const loginSubmit = (contents) => {
    console.log(contents.id);
}

