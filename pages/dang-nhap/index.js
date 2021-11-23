export default function Login() {
    const breadcrumb = [
        {
            title: "Đăng nhập",
            url: "/dang-nhap",
        },
    ]
    const dispatch = useDispatch()
    const [emailState, setEmailState] = useState(InputState.VALID)
    const [passwordState, setPasswordState] = useState(InputState.VALID)

    const emailRef = useRef("")
    const passwordRef = useRef("")

    function checkEmail() {
        if (emailRef.current.value === "") {
            emailRef.current.style.border = "1px solid red"
            setEmailState(InputState.EMPTY)
            return false
        }
        return true
    }

    function checkPasswork() {
        if (passwordRef.current.value === "") {
            passwordRef.current.style.border = "1px solid red"
            setPasswordState(InputState.EMPTY)
            return false
        }
        return true
    }
    function dangnhapSubmit() {
        let checkSumit = checkEmail()
        checkSumit = checkPasswork() && checkSumit
        if (checkSumit) {
            const dataPost = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }
            dispatch(userLogin(dataPost))
        }
    }
    function clearState(e, clearError) {
        e.target.style.border = "1px solid #bbbbbb"
        clearError()
    }
    return (
        <div></div>
    )
}