import Page from '../components/Page'
import Character from '/character.png' // TODO: 이츠카 시네로 변경 (현재 임시로 세피로트 사용)

export default () => (
    <Page className='bg-black flex flex-col h-screen'>
        <div className='m-12 text-center space-y-4 flex-none'>
            {/* Top */}
            <h1 className='text-8xl'>謹弔</h1>
            <h2 className='text-3xl'>삼가 고인의 명복을 빕니다</h2>
        </div>
        <div className='flex-1 overflow-hidden relative'>
            {/* Bottom */}
            <img
                className='m-auto h-full'
                src={Character}
            />
        </div>
    </Page>
)
