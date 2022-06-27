import logoFooter from '../../assets/logoFooter.png'

function Footer() {
    return( 
        <footer> 
            <div className='container-footer'>
                <div className='img-footer'>
                    <img src={logoFooter} alt='logo du site Web Kasa bas de page '/>
                </div>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer