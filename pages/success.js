import Link from 'next/link'

export default function Success() {
    return <div>
        Your form was successfully submitted!
        <Link href='/'>
            <a>Go back home</a>
        </Link>
    </div>
}