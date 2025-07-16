import { Col, Row } from "react-bootstrap";

interface GridListProps<T> {
    records: T[],
    renderItem:(record: T) => React.ReactNode; 
}

type THasID = {
    id?:number
}

const GridList = <T extends THasID> ({records,renderItem}: GridListProps<T>) => {

    const dataList = records.length > 0 ? records.map((record) => (
        <Col 
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2">
            {renderItem(record)}
        </Col>
        // {renderItem(record)} implementing render props pattern
        // where as you see callback function it invoked within map - for loop
    )) : "There are no data yet!";

    return (
        <Row> {dataList} </Row>
    )
}

export default GridList