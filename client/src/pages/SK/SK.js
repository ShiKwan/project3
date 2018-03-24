import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Fade from "../../components/Fade";
import ModalExample from "../../components/Modals";
import {Col, Row, Container} from "reactstrap";
import Progress from "../../components/Progress";
import Table from "../../components/Table";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    FadeButton : "Fade In/Out",
    modalLabel : "Modal"
  };

  componentDidMount() {
    //this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      

      <Container>
        Example of navbar: 
        <Navbar />  
        Example of Carousel: 
        <Carousel />

        Example of Fade: 
        <Fade FadeButton= {this.state.FadeButton}>
          Potato?
        </Fade>

        Example of Container, Row, and Col:
        <Container>
          <Row>
            <Col sm='4'> 4 col </Col>
            <Col sm='8'> 8 col </Col>
          </Row>
        </Container>
        Example of Fluid Container, Row, and Col:
        <Container fluid>
          <Row>
            <Col sm='4'> 4 col </Col>
            <Col sm='8'> 8 col </Col>
          </Row>
          <Row>
            <Col sm='2'> 2 col </Col>
            <Col sm='2'> 2 col </Col>
            <Col sm='2'> 2 col </Col>
            <Col sm='2'> 2 col </Col>
            <Col sm='2'> 2 col </Col>
            <Col sm='2'> 2 col </Col>
          </Row>
        </Container>
        <br />
        Example of Modal:
        <ModalExample buttonLabel={this.state.modalLabel}/>

        Example of Progress : 
        <div className="text-center">25%</div>
        <Progress value="25" />
        <div className="text-center">Multiple bars </div>
        <Progress multi>
          <Progress bar color="success" value="50" />
          <Progress bar color="danger" value='5' />
          <Progress bar color='warning' value="45" />
        </Progress>

        <br />
        Example of Table : 
        <h1>Patient Information</h1>
        <Table></Table>

        <div style={{height: "1000px"}}></div>
        <h1 style={{color: 'red'}}className="danger">KEEP THIS FOR REFERENCE</h1>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
