import { Link } from 'react-router-dom';
import formatNumber from '../../../../utils/numberFormatter';
import { CategoryCardItem } from './styles';

interface CategoryCardProps {
    title: string;
    courses: number;
    students: number;
    image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
    return (
        <CategoryCardItem>
            <Link to={'/categories/' + props.title + '/skills'} className='category-link'>
                    <div className="img-wrapper">
                        <img src={props.image} alt="category image" />
                    </div>
                    <div className="content">
                        <div>
                            <h3>{props.title}</h3>
                            <p>
                                <span>{props.courses} Courses</span>
                                <span className='seperator'>|</span>
                                <span>{formatNumber(props.students)} Students</span>
                            </p>
                        </div>
                    </div>
            </Link>                
        </CategoryCardItem>
    )
}

export default CategoryCard;