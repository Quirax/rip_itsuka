import Page from '../components/Page'

export default () => (
    <Page className='p-8 flex flex-col space-y-8'>
        <h2 className='text-3xl font-bold text-gray-500'>사망로그</h2>
        <iframe
            className='size-full flex-1'
            src='https://www.youtube-nocookie.com/embed/Um4qTZtS_uM'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen></iframe>
    </Page>
)
