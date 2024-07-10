import Link from 'next/link';
import Image from 'next/image';

{/* <Image src='/logo.svg' width={54} height={54} priority alt='Logo' /> */}

const Logo = () => {
    return <Link href='/'>
        CHAKIR
    </Link>;
};

export default Logo;