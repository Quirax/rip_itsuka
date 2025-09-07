import Page from '../components/Page'
import './Info.css'

export default () => {
    const today = new Date()
    const funeralDate = new Date()
    funeralDate.setDate(today.getDate() + 3)

    return (
        <Page className='flex flex-col justify-evenly items-center'>
            <div className='text-center space-y-6'>
                <h2 className='text-3xl font-bold text-gray-500'>
                    {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일
                </h2>
                <h1 className='text-6xl font-bold'>
                    이츠카 시네 님께서
                    <br />
                    영면하셨습니다
                </h1>
            </div>
            <dl id='funeral-info'>
                <div>
                    <dt>고인</dt>
                    <dd>故 이츠카 시네 (향년 18세)</dd>
                </div>
                <div>
                    <dt>빈소</dt>
                    <dd>모 장례식장 1호실</dd>
                </div>
                <div>
                    <dt>발인</dt>
                    <dd>
                        {funeralDate.getFullYear()}년 {funeralDate.getMonth() + 1}월 {funeralDate.getDate()}일 오전 7시
                    </dd>
                </div>
            </dl>
        </Page>
    )
}
