import { render, screen } from "@testing-library/react";
import Main from "../container/Main";

describe('Main',()=>{
    it('should have healine h1',()=>{
        render(<Main />);
        expect(screen.getByText(/App Render/i)).toBeInTheDocument();
    })
})