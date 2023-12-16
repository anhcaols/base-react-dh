import styles from './styles.module.css'
import './styles.css'

export default function HomePage() {
	const users = [
		{
			id: 1,
			name: "Anh Cao"
		},
		{
			id: 2,
			name: 'Duy Hung'
		},
		{
			id: 3,
			name: "Anh Cao 3"
		},
		{
			id: 4,
			name: 'Duy Hung 4'
		},
		{
			id: 5,
			name: "Anh Cao 5"
		},
		{
			id: 6,
			name: 'Duy Hung 6'
		},
		{
			id: 7,
			name: "Anh Cao 7"
		},


	]
	// 12 col
	return (
		<div>
			<div className="container">
				<div className="row">
					{
						users.map((user) => (
							<div key={user.id} className={'d-flex align-items-center gap-2 col-3 mb-3'}>
								<div style={{width: 32, height: 32}}>
									<img
										style={{borderRadius: 999}}
										className={'w-100 h-100 object-fit-cover'}
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrJWVSWZGW2iT1Ji4eLhLxjhQNyAiWn32Np_GrsrA1A&s"
										alt="img"/>
								</div>
								<div className={'d-flex flex-column'}>
									<p>{user.name}</p>
									<p>FrontEnd</p>
								</div>
							</div>
						))
					}
				</div>
			</div>

			<div>Anh Caoooooo</div>


		</div>
	)
}