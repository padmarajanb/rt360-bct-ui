export const emailfrequencyconfigData = [
    {
        'Sno': '1',
        'StrategyID': 'ST001',
        'CBTID': '001',
        'CBTName': 'Credit Portfolio',
        'CreatedBy': 'Branch Manager',
        'CreatedOn': '11.11.22',
        'ModifiedBy': 'Regional Head',
        'ModifiedOn': '25.11.22',
    },
    {
        'Sno': '2',
        'StrategyID': 'ST002',
        'CBTID': '002',
        'CBTName': 'Retail Portfolio',
        'CreatedBy': 'Zone Head',
        'CreatedOn': '09.11.22',
        'ModifiedBy': 'HO User',
        'ModifiedOn': '24.11.22',
    },
    {
        'Sno': '3',
        'StrategyID': 'ST003',
        'CBTID': '003',
        'CBTName': 'MSME Portfolio',
        'CreatedBy': 'Branch Manager',
        'CreatedOn': '15.11.22',
        'ModifiedBy': 'Zone Head',
        'ModifiedOn': '29.11.22',
    },
    {
        'Sno': '4',
        'StrategyID': 'ST004',
        'CBTID': '004',
        'CBTName': 'Agriculture Portfolio',
        'CreatedBy': 'HR',
        'CreatedOn': '06.11.22',
        'ModifiedBy': 'Admin',
        'ModifiedOn': '16.11.22',
    },
    {
        'Sno': '5',
        'StrategyID': 'ST005',
        'CBTID': '005',
        'CBTName': 'Consumer Loan Book',
        'CreatedBy': 'Admin',
        'CreatedOn': '05.11.22',
        'ModifiedBy': 'Admin',
        'ModifiedOn': '21.11.22',
    }];

export const editemailfrequencyconfigData = [
    {
        'BucketNo': 'Bucket 1',
        'BucketDesc': 'Very Low',
    },
    {
        'BucketNo': 'Bucket 2',
        'BucketDesc': 'Low',
    },
    {
        'BucketNo': 'Bucket 3',
        'BucketDesc': 'Medium',
    },
    {
        'BucketNo': 'Bucket 4',
        'BucketDesc': 'High',
    },
    {
        'BucketNo': 'Bucket 5',
        'BucketDesc': 'Very High',
    }];

export const emailtemplateconfigData = [
    {
        'Sno': '1',
        'EmailTemplateID': 'E-0011',
        'EmailTemplateName': 'D-NPA Template',
        'CreatedOn': '01.11.22',
        'CreatedBy': 'HO User'
    },
    {
        'Sno': '2',
        'EmailTemplateID': 'E-0012',
        'EmailTemplateName': 'SMA Template',
        'CreatedOn': '02.11.22',
        'CreatedBy': 'Zone Head'
    },
    {
        'Sno': '3',
        'EmailTemplateID': 'E-0013',
        'EmailTemplateName': 'SMS Template',
        'CreatedOn': '05.11.22',
        'CreatedBy': 'Branch Manager'
    },
    {
        'Sno': '4',
        'EmailTemplateID': 'E-0014',
        'EmailTemplateName': 'D-NPA Template',
        'CreatedOn': '09.11.22',
        'CreatedBy': 'HR'
    },
    {
        'Sno': '5',
        'EmailTemplateID': 'E-0015',
        'EmailTemplateName': 'SMA Template',
        'CreatedOn': '15.11.22',
        'CreatedBy': 'HO User'
    },
    {
        'Sno': '6',
        'EmailTemplateID': 'E-0016',
        'EmailTemplateName': 'D-NPA Template',
        'CreatedOn': '27.11.22',
        'CreatedBy': 'HO User'
    }
];


export const alertConfigData = [
    {
        'AlertID': '8013',
        'AlertDesc': 'OTMS::- Liablities',
        'Branch': 'Yes',
        'Region': 'Yes',
        'Zone': 'No',
        'CentralZone': 'No',
        'CentralBranch': 'No',
        'Document': 'No',
    },
    {
        'AlertID': '8002',
        'AlertDesc': 'OTMS::- Office Assist',
        'Branch': 'No',
        'Region': 'No',
        'Zone': 'Yes',
        'CentralZone': 'Yes',
        'CentralBranch': 'No',
        'Document': 'Yes',
    },
    {
        'AlertID': '8005',
        'AlertDesc': 'OTMS::- Asset',
        'Branch': 'Yes',
        'Region': 'Yes',
        'Zone': 'Yes',
        'CentralZone': 'Yes',
        'CentralBranch': 'Yes',
        'Document': 'Yes',
    },
    {
        'AlertID': '8007',
        'AlertDesc': 'OTMS::- Liablities',
        'Branch': 'No',
        'Region': 'No',
        'Zone': 'Yes',
        'CentralZone': 'No',
        'CentralBranch': 'No',
        'Document': 'No',
    },
    {
        'AlertID': '8012',
        'AlertDesc': 'OTMS::- Liablities',
        'Branch': 'No',
        'Region': 'Yes',
        'Zone': 'No',
        'CentralZone': 'No',
        'CentralBranch': 'Yes',
        'Document': 'Yes',
    },
    {
        'AlertID': '8004',
        'AlertDesc': 'OTMS::- Asset',
        'Branch': 'Yes',
        'Region': 'No',
        'Zone': 'No',
        'CentralZone': 'Yes',
        'CentralBranch': 'No',
        'Document': 'Yes',
    },
    {
        'AlertID': '8006',
        'AlertDesc': 'OTMS::- Office Assist',
        'Branch': 'Yes',
        'Region': 'Yes',
        'Zone': 'Yes',
        'CentralZone': 'No',
        'CentralBranch': 'No',
        'Document': 'No',
    }
];

export const assignPrivilegeConfig = [
    {
        "Srno": "1",
        "Menu": "Alert Inbox & Workflow"
    },
    {
        "Srno": "2",
        "Menu": "Notification"
    },
    {
        "Srno": "3",
        "Menu": "Alert Configuration"
    },
    {
        "Srno": "4",
        "Menu": "Operations"
    },
    {
        "Srno": "5",
        "Menu": "CRM"
    },
    {
        "Srno": "6",
        "Menu": "User Management"
    },
    {
        "Srno": "7",
        "Menu": "Reports Specific to Module"
    },
    {
        "Srno": "7.1",
        "Menu": "Reporst Common"
    },
    {
        "Srno": "8",
        "Menu": "Dashboards Specific to Module"
    },
    {
        "Srno": "8.1",
        "Menu": "Dashboards Common"
    },
    {
        "Srno": "8.2",
        "Menu": "Scoring Dashboard"
    },
]