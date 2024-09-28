import DetailItem from './DetailItem';
import { useParams } from 'react-router-dom';
const DetailList = ({ data }) => {
	const param = useParams();
	const paramId = param.entryId;
	const dataId = data.find((el) => el.id == paramId);

	return <DetailItem data={dataId} />;
};
export default DetailList;
