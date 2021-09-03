import { Component } from "../../common/Component.js";
import { serialize } from "../../common/common.js";
import { loginPost } from "../../api/user.js";

export default class LoginForm extends Component {
    setup() {
        this.$state = {};
    }

    template() {
        const {} = this.$state;
        return `
            <form onSubmit="return false;" id="loginForm">
                <label for="id">아이디</label>
                <input type="text" id="id" name="id /">
                <label for="password">비밀번호</label>
                <input type="password" id="password" name="password /">
                <button type="button" id="loginSubmit">확인</button>
                <button type="button" id="clearForm">취소</button>
            </form>`;
    }

    setEvent() {
        const { loginSubmit } = this.$props;
        this.addEvent('click', '#loginSubmit', async ({target}) => {
            const $form = document.querySelector("#loginForm");
            const formData = serialize(new FormData($form));
            const result = await loginPost(formData);
            loginSubmit(result);
        });

        this.addEvent('click','#clearForm', async ({target}) => {
            initForm();
        });

        this.addEvent('click', '.postBtn', async ({target}) => {
            const result = await loginPost(this.$state);
            this.setState(result);

        });
    }
}

//form 초기화
const initForm = () => {
    document.querySelector("#id").value = '';
    document.querySelector("#password").value = '';
}