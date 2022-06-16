import './Layout.scss'
import { ResponsiveAppBar } from '../../ResponsiveAppBar';

export const Layout = ({ children }: any) => {
    return (
        <>
            <ResponsiveAppBar />
            <div id='content'>
                {children}
            </div>
        </>

    )
}