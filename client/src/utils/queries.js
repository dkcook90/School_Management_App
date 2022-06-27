import { gql } from "@apollo/client";

export const QUERY_USER = gql`
	query User($_id: String!) {
		user(_id: $_id) {
			_id
			username
			email
			role
		}
	}
`;

export const QUERY_SCHOOL = gql`
	query school($_id: String!) {
		school(_id: $_id) {
			_id
			name
			principal
			budget
			address
			image
			departments {
				_id
				department
				school
				budget
				teachers
				classes
			}
			teachers {
				_id
				name
				department
				office
			}
			students {
				_id
				name
				grade
				note
			}
		}
	}
`;

export const QUERY_ALLSCHOOLS = gql`
	query getSchools {
		schools {
			_id
			name
			principal
			budget
			address
			image
			departments {
				_id
			}
			teachers {
				_id
			}
			students {
				_id
			}
		}
	}
`;

export const QUERY_ALLDEPT = gql`
	query getDepartments {
		departments {
			_id
			department
			budget
			classes {
				_id
			}
			teachers {
				_id
			}
		}
	}
`;

export const QUERY_ALLCLASSROOMS = gql`
	query getAllClassrooms {
		teachers {
			_id
			name
			department
			office
			students {
				_id
				name
				grade
				note
			}
		}
	}
`;

export const QUERY_SINGLE_TEACHER = gql`
	query getSingleTeacher($teacherId: ID!) {
		teacher(teacherId: $teacherId) {
			_id
			name
			department
			office
			students {
				_id
				name
				grade
				note
			}
		}
	}
`;

// export const QUERY_SINGLE_STUDENT = gql`
// query getSingleStudent($teacherId: ID!) {
//   teacher(teacherId: $teacherId) {
//     _id
//     name
//     department
//     office
//     students {
//       _id
//       name
//       grade
//       note
//     }
//   }
// }`
