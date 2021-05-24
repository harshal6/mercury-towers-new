function SubscribeForm(props) {
    return(
        <div class="subscribe-content">
            <div class="col-md-12  p-0">
                <h2 class="mb-4">{props.heading}</h2>
                <p>{props.description}</p>
                <form>
                    <input type="text" name="email" placeholder="YOUR EMAIL ADDRESS" />
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>

        </div>
    );

}
export default SubscribeForm
