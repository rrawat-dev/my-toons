import App from 'next/app';
import Page from '../components/Page'
import { getStore } from '../redux/store';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";

const store = getStore();

export default withRedux(getStore, {debug: true})(class MyApp extends App {
    
    static async getInitialProps({Component, ctx}) {

        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render () {
        const { Component } = this.props;

        return (
            <Provider store={store}> 
                <Page>
                    <Component {...this.props.pageProps}/>
                </Page>
            </Provider>
        )
    }
    
})