import { render } from '@testing-library/react';
import IndexSearcher from "./IndexSearcher"


describe('IndexSearcher', ()=>{
    it('should render', ()=>{
        const { getByText } = render(<IndexSearcher />)
        expect(IndexSearcher).toBeDefined()
    })
    it('shows the letter "A"', ()=>{
        const { getByText } = render(<IndexSearcher />)
        expect(getByText("A")).toBeDefined()
    })
})