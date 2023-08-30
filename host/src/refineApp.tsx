import React from "react"
import { Refine } from '@refinedev/core'
import dataProvider from '@refinedev/simple-rest'
import { Outlet, Route, Routes } from "react-router-dom"
// import routerBindings from '@refinedev/react-router-v6'
import { Title } from "./components/Title"

import('react-dom');
debugger
console.log(window, React);

const RefineApp: React.FC = () => {
    return (
        <>
            <Title title="Refine APP" />
            <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                // routerProvider={routerBindings}
                resources={[
                    {
                        name: "blog_posts",
                        list: "/refine/blog-posts",
                        meta: {
                            label: "Blog Posts"
                        }
                    }
                ]}
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    projectId: "e9uTz1-qM6eXG-BuxEt2",
                }}
            >
                <Routes>
                    <Route path="/refine" element={
                        <div className="card">
                            <Title title="Refine APP" />
                            <Outlet />
                        </div>
                    }>
                        <Route path="/refine/blog-post">
                            <Route index element={<div>BLOG POSTS LIST</div>} />
                        </Route>
                    </Route>
                </Routes>
            </Refine>
        </>
    )
}

export default RefineApp