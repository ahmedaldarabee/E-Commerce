import { LottieHandler } from "@components/feedback";
import { Col, Row } from "react-bootstrap";

interface GridListProps<T> {
    records: T[],
    renderItem:(record: T) => React.ReactNode,
    emptyMessage?:string
}

type THasID = {
    id?:number
}

const GridList = <T extends THasID> ({records,renderItem,emptyMessage}: GridListProps<T>) => {

    const dataList = records.length > 0 ? records.map((record) => (
        <Col key={record.id} xs={6} md={3}
            className="d-flex justify-content-center mb-5 mt-2">
            {renderItem(record)}
        </Col>
    )) : <LottieHandler type="empty" message={emptyMessage}/>;

    return (
        <Row> {dataList} </Row>
    )
}

export default GridList