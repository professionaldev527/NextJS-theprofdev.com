import Layout from "@/components/layout/Layout"
import Contact2 from '@/components/sections/Contact2'

export default function ContactPage() {
	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<div style={{ paddingTop: '20px', minHeight: '80vh' }}>
					<Contact2 />
				</div>
			</Layout>
		</>
	)
}
