import Button from '../../../components/Button';
import {
  getActivePageNumber,
  getActivePageStart,
  shouldShowPreviousButton,
  shouldShowNextButton,
  shouldShowPagination
} from '../../../states/books/selectors';
import routes from '../../../configs/routes';
import { paginationButtonsToShow } from '../../../configs';
import { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  activePageNumber: getActivePageNumber(state),
  activePageStart: getActivePageStart(state),
  showPagination: shouldShowPagination(state),
  showPrevious: shouldShowPreviousButton(state),
  showNext: shouldShowNextButton(state)
});

const mapDispatch = (dispatch) => ({});

class BooksPagination extends Component {
  constructor(props) {
    super(props);
    this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
    this.handlePageNext = this.handlePageNext.bind(this);
    this.handlePagePrevious = this.handlePagePrevious.bind(this);
  }
  handlePageNumberClick(event) {
    const { searchParams, history } = this.props;
    searchParams.set('page', event.target.id);
    history.push({
      path: routes.BOOKS.resolve(),
      search: `?${searchParams.toString()}`
    });
  }
  handlePageNext() {
    const { searchParams, history, activePageNumber } = this.props;
    searchParams.set('page', activePageNumber + 1);
    history.push({
      path: routes.BOOKS.resolve(),
      search: `?${searchParams.toString()}`
    });
  }
  handlePagePrevious() {
    const { searchParams, history, activePageNumber } = this.props;
    searchParams.set('page', activePageNumber - 1);
    history.push({
      path: routes.BOOKS.resolve(),
      search: `?${searchParams.toString()}`
    });
  }
  render() {
    const {
      showPagination,
      showPrevious,
      activePageStart,
      activePageNumber,
      showNext
    } = this.props;
    if (!showPagination) {
      return null;
    }
    return (
      <div style={{ display: 'flex', padding: '16px 0' }}>
        <Button name="Previous" disabled={!showPrevious} onClick={this.handlePagePrevious} />
        {[...Array(paginationButtonsToShow)].map((count, index) => {
          const buttonNumber = activePageStart + index;
          return (
            <Button
              key={`page-${buttonNumber}`}
              name={buttonNumber}
              id={buttonNumber}
              isActive={buttonNumber === activePageNumber}
              onClick={this.handlePageNumberClick}
            />
          );
        })}
        <Button name={'Next'} disabled={!showNext} onClick={this.handlePageNext} />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatch)(BooksPagination);
