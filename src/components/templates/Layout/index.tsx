import './layout.scss'
import ResponsiveAppBar from '../../ResponsiveAppBar';

const Layout = ({ children }: any) => {
    return (
        <>
            <ResponsiveAppBar />
            <div id='content'>
                {children}
            </div>
        </>

    )
}

export default Layout