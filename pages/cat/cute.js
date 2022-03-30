const SoCute = () => {

    const clickHandler = async () => {
        const localGoogleHomeNotifier = `${process.env.LOCAL_SERVER_HOST}/nyaon`;
        try {
            const _ = await fetch(localGoogleHomeNotifier, {
                method: 'POST',
                cache: 'no-cache',
            })
        } catch {
            console.log("maybe CORS error, but dont worry")
        }
    }
    
    return <button onClick={clickHandler}>かわいいにゃー！</button>
}

export default SoCute