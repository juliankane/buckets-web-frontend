import { LogoSVG as Logo } from '@assets/logo.tsx';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const hideNav = location.pathname === '/signin' || location.pathname === '/register';
    const logoFill = hideNav ? 'bg-border' : 'bg-bucket-orange';

    return (    
        <header className='fixed inset-x-0 top-0 z-10 border-b-2 bg-background-rich border-border'>
            <div>
                <div className="flex h-20 items-center justify-between gap-8 sm:px-6">
                    <nav className="flex items-center gap-4">
                        <Link to="/" className="hover:cursor-pointer flex items-center" aria-label="/">
                            <span className={`w-16 h-16 flex items-center justify-center rounded-full ${logoFill}`}>
                                <Logo className="w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 rotate-12 fill transition-all duration-200" />
                            </span>
                            {!hideNav && (
                                <h1 className='ml-4 font-sans font-bold text-text-heading text-4xl tracking-wider'>
                                    buckets
                                </h1>
                            )}
                        </Link>
                    </nav>
                    
                    {!hideNav && (
                        <div className="flex space-x-3">
                            <Link to="/signin"
                                className={`
                                    inline-flex items-center justify-center
                                    text-text-primary text-lg font-semibold
                                    px-6 py-2 rounded-2xl border border-text-muted
                                    hover:border-bucket-aqua shadow-md hover:shadow-lg`
                                }>
                                Sign In
                                </Link>
                            <Link
                                to="/register" className={`
                                    inline-flex items-center justify-center
                                    text-text-primary text-lg font-semibold
                                    px-6 py-2 rounded-2xl border border-text-muted
                                  hover:border-bucket-aqua
                                    shadow-md hover:shadow-lg `
                                } >
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
    



    
