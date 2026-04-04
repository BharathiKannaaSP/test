function Hello(props) {
    console.log('hello' + props.name)
}

function withLogger(Component) {
    return function Wrapped(props) {
        console.log(props)

        return < Component {...props} />
    }
}

const EnhancedHello = withLogger(Hello)

    < EnhancedHello name = 'hello' />