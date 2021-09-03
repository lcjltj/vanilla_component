import { Component } from "./common/Component.js";

export default  class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            path: location.pathname
        };

        this.container = document.createElement('div');
        window.addEventListener('popstate', this.handlePopState);
    }

    handlePopState = (e) => {
        this.setState({
            path: location.pathname,
        });
    };

    render() {
        if(this.container){
            this.container.innerHTML = "<h1>Hello</h1>";

            // renderComponent(
            //     Login,
            //     {
            //         path,
            //         history: {
            //             push: this.push,
            //             goBack: this.goBack,
            //         },
            //         routes: [
            //             {
            //                 path: '/',
            //                 Component: HomePage,
            //             }
            //         ],
            //     },
            //     this.container
            // )
        }
        return this.container;
    }

}