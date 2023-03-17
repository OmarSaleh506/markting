import { Layout } from "src/components/common/layout";
import Test from "src/components/user/test";
import LandingPageContainer from "src/containers/user/landing-page-container";

function LandingPage() {
    return (
        <Layout>
            <>
                <LandingPageContainer />
                <Test />
            </>
        </Layout>
    );
}

export default LandingPage;