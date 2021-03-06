import React, { useEffect } from "react";
import Layout from "../../../Layout";
import Chat from "../../../components/Chat";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const ChatPageProduct = ({ query }) => {
    const accessToken = useSelector((state) => state.auth_user.accessToken);
    const router = useRouter();
    const { id } = query

    useEffect(() => {
        if (!accessToken) {
            router.push("/");
            return
        }
        console.log(id)
    }, [query]);

    return (
        <Layout nofooter={true}>
            <Chat type="product" id={id} />
        </Layout>
    );
}
ChatPageProduct.getInitialProps = ({ query }) => {
    return { query };
};
export default ChatPageProduct;
