import './index.css'

const BlogList = props => {
  const {profileDetails} = props
  const {title, description, publishedDate} = profileDetails

  return (
    <li className="profile-item-container">
      <div className="heading-published-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogList
