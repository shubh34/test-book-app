import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import {
  setPageNumberToFetchBook,
  setPerPageToFetchBooks,
  setSearchCriteriaToFetchBook
} from '../../states/books/actions';
import { getBooksMeta } from '../../states/books/selectors';

export const useBooks = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get('page'));
  const perPage = parseInt(searchParams.get('per_page'));
  const search = searchParams.get('search');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setSearchQuery = useCallback(
    debounce((search) => {
      dispatch(setSearchCriteriaToFetchBook(search));
    }, 500),
    []
  );
  useEffect(() => {
    if (typeof search === 'string') {
      setSearchQuery(search);
    }
  }, [dispatch, search, setSearchQuery]);
  useEffect(() => {
    if (!isNaN(page)) {
      dispatch(setPageNumberToFetchBook(page));
    }
  }, [dispatch, page]);
  useEffect(() => {
    if (!isNaN(perPage)) {
      dispatch(setPerPageToFetchBooks(perPage));
    }
  }, [dispatch, perPage]);

  const meta = useSelector(getBooksMeta);
  return {
    page: !isNaN(page) ? page : meta.page,
    itemsPerPage: !isNaN(perPage) ? perPage : meta.itemsPerPage,
    filters: typeof search === 'string' ? [{ type: 'all', values: [search] }] : meta.filters,
    searchParams
  };
};
