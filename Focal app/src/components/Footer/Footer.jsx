import './Footer.css'

export default function Footer() {
    return (
        <div> 
            <div className='HD_footer'>
                <div className='HD_footer section_padding'>
                    <div className='HD_footer-divs'>

                    <div className='HD_footer-div'>
                        <h4>Job</h4>
                        <p>Search Employee</p>
                        <p className='endp'>Search Job</p>
                    </div>

                    <div className='HD_footer-div'>
                        <h4>Freelance</h4>
                        <p>Search Freelance</p>
                        <p className='endp'>Search Services</p>
                    </div>

                    <div className='HD_footer-div'>
                        <h4>Blog</h4>
                        <p>Search Blogs</p>
                        <p className='endp'>Add Blog</p>
                    </div>

                    <div className='HD_footer-div'>
                        <h4>Internship</h4>
                        <div className='p-div'>
                        <p>Registeration</p>
                        <p className='endp'>Search</p>
                        </div>
                    </div>

                    
                    <div className='HD_footer-div'>
                        <h4 className='keep'>Keep in Touch</h4>
                        <a href=''>
                        <p className='pkeep'>focal-x@focalapp.com</p>
                        </a>
                        <a href=''>
                        <p className='endp'> +963 994 975 318</p>
                        </a>
                    </div>


                    </div>
                </div>
            <div className='HD_footer-below'>
                <div className='HD_footer-text'>
                    <p>
                    © 2021 - 2022 focal X a gency All Right Reserved
                    </p>
                </div>
                <hr className='line'></hr>
            </div>

            </div>
        </div>
    )
}
