import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { MainStyles } from './App.styles';
import { Routes } from './enums/routes.enum';
import Navbar from './layouts/navbar/navbar.component';

const NotesList = lazy(
    () => import('./pages/entries-list/entries-list.component')
);
const AddNote = lazy(() => import('./pages/add-entry/add-entry.component'));
const ViewNote = lazy(() => import('./pages/view-entry/view-entry.component'));
const NotFound = lazy(() => import('./pages/404/404.component'));

function App() {
    return (
        <MainStyles>
            <Navbar />
            <main>
                <Suspense fallback={null}>
                    <Switch>
                        <Redirect exact from={'/'} to={Routes.LIST} />
                        <Route exact path={Routes.LIST} component={NotesList} />
                        <Route
                            exact
                            path={Routes.LIST + `/:id`}
                            component={ViewNote}
                        />
                        <Route exact path={Routes.ADD} component={AddNote} />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </main>
        </MainStyles>
    );
}

export default App;
