import {render,screen,cleanup} from '@testing-library/react'
import Testcomponent from './Testcomponent';


test('should render non completed test component',()=>{
    const todo={ id: 1, title: "given work", completed: false, };
    render (<Testcomponent testcomponent={todo}/>);
    const comp =screen.getByTestId('e-1');
    expect(comp).toBeInTheDocument();
    expect(comp).toHaveTextContent("given work")
});

test('should render completed test component',()=>{
    const todo={ id: 2, title: "home work", completed: true }
    render (<Testcomponent testcomponent={todo}/>);
    const comp =screen.getByTestId('e-2');
    expect(comp).toBeInTheDocument();
    expect(comp).toHaveTextContent("home work")
});