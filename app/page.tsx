import '@/app/paper/paper.css'

export default function Page() {
    return (
        <div className={'bg-paper-background w-screen min-h-screen text-center'}>
            <header className={'absolute w-screen px-12 py-6 flex gap-8 justify-end'}>
                <a>About</a>
                <a>Works</a>
            </header>
            <main className={'inline-block mx-auto'}>
                <div className={'paper'}>
                    <h1>Ar</h1>
                    <h2>村部遥紀</h2><div className={'body'}>
                    <h3>About</h3>
                    <p>○○大学○○学部○○学科の大学○年生．好きなものは○○，嫌いなものは○○．</p>
                    <h3>History</h3></div>
                    <h3>Contact</h3>
                    <h3>Works</h3>
                </div>
            </main>
            <footer className={'py-8'}>
                anya © {new Date().getFullYear()}
            </footer>
        </div>
    )
}
