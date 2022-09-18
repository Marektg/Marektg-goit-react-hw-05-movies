import styles from "./NotFound.module.scss";

const NotFound = () => {
    const { Bold, HomeLink, Main } = styles;
    return (
        <Main>
            <Bold>404</Bold>
            <p>Sorry, we couldn't find that page :(</p>
            <p>If you want, you can go back to the <HomeLink to="/">main page</HomeLink>.
            </p>
        </Main>
    );
};

export default NotFound;