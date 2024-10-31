// import Activity from '@/components/Activity';

type ParamsType = {
	params: {
		id: number;
	};
};

export default async function Profile({params}: ParamsType) {
	const {id} = await params;
	return <div>{/* <Activity /> */}</div>;
}
