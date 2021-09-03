export class Component {
    $target;
    $state;
    $props;
    defaultState;

    constructor ($target, $props) {
        this.$target = $target;
        this.$props = $props;
        this.setup();
        this.setEvent();
        this.setDefaultState()
        this.render();
    }

    setup () {};
    mounted () {};
    template () { return ''; }

    render () {
        this.$target.innerHTML = this.template();
        this.mounted();
    }

    setEvent () {}

    setDefaultState() {
        this.defaultState = this.$state;
    }
    setState (newState) {
        this.$state = {...this.defaultState,...newState };
        this.render();
    }

    addEvent(eventType, selector, callback) {
        const children = [...this.$target.querySelectorAll(selector)];

        //selector 요소가 children 에 포함 되어 있지 않으면 closet 을 통해 하위 요소를 확인 하여 event 처리
        const isTarget = (target) => children.includes(selector) || target.closest(selector);

        this.$target.addEventListener(eventType, event => {

            if(!isTarget(event.target)){
                return false;
            }
            callback(event);
        })
    }
}