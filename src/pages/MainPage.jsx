import Page from '../components/Page'
import Character from '/character.png' // TODO: 이츠카 시네로 변경 (현재 임시로 세피로트 사용)

export default () => (
    <Page className='bg-black flex flex-col h-screen relative'>
        <div className='m-12 text-center space-y-4 flex-none'>
            {/* Top */}
            <h1 className='text-8xl'>謹弔</h1>
            <h2 className='text-3xl'>삼가 고인의 명복을 빕니다</h2>
        </div>
        <div className='flex-1 overflow-hidden'>
            {/* Bottom */}
            <img
                className='m-auto h-full'
                src={Character}
            />
        </div>
        <p className='absolute top-0 right-0 text-xs p-4 text-right font-thin'>
            이 캐릭터의 저작권은{' '}
            <a
                href='https://x.com/f0r_commu_'
                target='_blank'>
                연화
            </a>
            에게 있습니다.
            <br />
            무단 복제 및 배포를 금합니다.
        </p>
    </Page>
)
