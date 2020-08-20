import React from 'react';
// import PropTypes from 'prop-types';
import Table from 'components/table/Table';
import PageBox from 'components/pages/PageBox';
import { useTranslation } from 'react-i18next';


const CompanyList = () => {
  const { t } = useTranslation();
  const columns = [
    { header: t('edrpou'), prop: 'edrpou' },
    { header: t('name'), prop: 'name' },
    { header: t('name'), prop: 'status' },
    { header: t('address'), prop: 'address' },
    { header: t('authorizedCapital'), prop: 'authorized_capital' },
  ];
  return (
    <PageBox header={t('viewTheRegistry')} noBox>
      <Table
        columns={columns}
        url="company/"
      />
    </PageBox>
  );
};

// CompanyList.propTypes = {};

export default CompanyList;