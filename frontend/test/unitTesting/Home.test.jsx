import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { describe, vi } from "vitest";
import {Home} from "../../src/pages/Home.jsx";
import axios from "axios";

vi.mock("../../src/assets/home-page-bg.jpg", () => ({ default: "home-bg.jpg" }));
vi.mock("../../src/assets/desh_board.png", () => ({ default: "dashboard.png" }));

vi.mock("../../src/assets/upArrow.png", () => ({ default: "upArrow.png" }));
vi.mock("../../src/assets/downArrow.png", () => ({ default: "downArrow.png" }));

vi.mock("../../src/assets/Optimize_Act.png", () => ({ default: "optimize.png" }));
vi.mock("../../src/assets/trackPerformance.png", () => ({ default: "track.png" }));
vi.mock("../../src/assets/addPortfolio.png", () => ({ default: "addPortfolio.png" }));
vi.mock("../../src/assets/creatAcc.png", () => ({ default: "creatAcc.png" }));

vi.mock("../../src/assets/featuredivlogo1.png", () => ({ default: "f1.png" }));
vi.mock("../../src/assets/featuredivlogo2.png", () => ({ default: "f2.png" }));
vi.mock("../../src/assets/featuredivlogo3.png", () => ({ default: "f3.png" }));
vi.mock("../../src/assets/featuredivlogo4.png", () => ({ default: "f4.png" }));


// --------------- Mock axios ---------------
vi.mock("axios");

// --------------- Mock react-router-dom ---------------
const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  __esModule: true,
  Link: ({ children, to, onClick }) => (
    <div data-to={to} onClick={onClick}>
      {children}
    </div>
  ),
  useNavigate: () => mockNavigate,
}));

// --------------- Mock Context ---------------
vi.mock("../../src/context/AppContext.jsx", () => ({
  __esModule: true,
  useAppContext: () => ({
    darkMode: false,
    setDarkMode: vi.fn(),
  }),
}));

// --------------- Mock Navbar ---------------
vi.mock("../../src/components/Navbar.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="navbar">Mock Navbar</div>,
}));

// --------------- Mock Footer ---------------
vi.mock("../../src/components/Footer.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="footer">Mock Footer</div>,
}));

// --------------- Mock CSS (VERY important for Home.css + AOS cases) ---------------
vi.mock("../../src/pages/Home.css", () => ({}));

// --------------- Clean up before each test ---------------
beforeEach(() => {
  vi.clearAllMocks();
  sessionStorage.clear();
});
describe("Home Component", () => {
test("renders Home with Navbar and Footer", () => {
  render(<Home />);

  expect(screen.getByTestId("navbar")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});
test("redirects to dashboard when token is valid", async () => {
  axios.get.mockResolvedValue({
    data: { success: true }
  });

  render(<Home />);

  await waitFor(() => {
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
test("does not redirect when token is invalid", async () => {
  axios.get.mockRejectedValue(new Error("Invalid token"));

  render(<Home />);

  await waitFor(() => {
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});

test("Get Started button sets sessionStorage correctly", () => {
  render(<Home />);

  const getStarted = screen.getByText("Get Started").closest("div");
  fireEvent.click(getStarted);

  expect(sessionStorage.getItem("isLogin")).toBe("true");
  expect(sessionStorage.getItem("forgotpassword")).toBe("false");
});
test("Sign Up Now button sets sessionStorage as expected", () => {
  render(<Home />);

  const signUp = screen.getByText("Sign Up Now").closest("div");
  fireEvent.click(signUp);

  expect(sessionStorage.getItem("isLogin")).toBe("false");
  expect(sessionStorage.getItem("forgotpassword")).toBe("false");
});
test("FAQ toggles open and closed", () => {
 const { container } = render(<Home />);

  const arrowIcon = screen.getAllByAltText(/arrow logo/i)[0];

  // Initially answer hidden
  const answer = container.querySelector(".answer_text");
  expect(answer).toHaveStyle({ display: "none" });

  // Click to open
  fireEvent.click(arrowIcon);
  expect(answer).toHaveStyle({ display: "block" });

  // Click again to close
  fireEvent.click(arrowIcon);
  expect(answer).toHaveStyle({ display: "none" });
});

test("expands a feature card when clicked", () => {
  render(<Home />);

  const cardTitle = screen.getByText("Dynamic Portfolio Tools");
  const cardDiv = cardTitle.closest(".features_card");

  fireEvent.click(cardDiv);

  expect(cardDiv.classList.contains("expanded")).toBe(true);
});

test("collapses expanded card when clicking See less", () => {
  render(<Home />);

  const cardTitle = screen.getByText("Dynamic Portfolio Tools");
  const cardDiv = cardTitle.closest(".features_card");

  // Expand card
  fireEvent.click(cardDiv);

  // Click "See less"
  const seeLess = screen.getByText("See less");
  fireEvent.click(seeLess);

  expect(cardDiv.classList.contains("expanded")).toBe(false);
});

test("does not expand feature card on mobile view", () => {
  window.innerWidth = 500;

  render(<Home />);

  const cardTitle = screen.getByText("Unified Dashboard");
  const cardDiv = cardTitle.closest(".features_card");

  fireEvent.click(cardDiv);

  expect(cardDiv.classList.contains("expanded")).toBe(false);
});


});