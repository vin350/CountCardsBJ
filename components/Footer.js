import Image from 'next/image';

function Footer() {
    return (
        <footer className={"footer"}>
            <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={"logo invert-black"}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}

export default Footer