import { useDrag } from 'react-dnd';

const DragableDiv = ({ name }) => {
    const [, ref] = useDrag({
        type: 'DIV',
        item: { name },
    });
    return (
        <div className='element' ref={ref}>
            {name}
        </div>
    )
}

export default DragableDiv