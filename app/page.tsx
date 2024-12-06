import Link from "next/link";
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
                    <h2>村部遥紀</h2><div className={'lime'} onclick="function1()">
                    <h3>About</h3>
                    <p>大阪大学工学部電子情報工学科３年生．好きなものは○○，嫌いなものは○○．</p>
                    <h3>History</h3></div>
                    <h3>Contact</h3>
                    <h3>Works</h3>
                    <Link href={'/orange'}>Orange</Link>
                    <Link href={'/paper'}>Paper</Link>
                    <Link href={'/photographic'}>Photographic</Link>
                </div>
            </main>
            <footer className={'py-8'}>
                anya © {new Date().getFullYear()}
            </footer>
        </div>
    )
}
const url = "file:///C:/Users/r1192/Desktop/reversi%20memory%20game%20desktop.html"; // GASで取得したウェブアプリのURL
const data = {
    'name': '山田 太郎',
    'email': 'yamada@example.com',
    'message': 'こんにちは！'
};
const options = {
    'method' : 'post',
    'headers': {
        'Content-Type': 'application/json'
    },
    'payload' : JSON.stringify(data) //送りたいデータをpayloadに配置してJSON形式変換。
};
function function1(){
    //res = UrlFetchApp.fetch(url,options); // <- Post リクエスト
    fetch(url, options)
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
}