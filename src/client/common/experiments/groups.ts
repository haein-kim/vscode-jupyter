// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

export enum Experiments {
    // Experiment to turn on custom editor or VS Code Native Notebook API support.
    CustomEditor = 'CustomEditor',
    // Experiment to turn on custom editor or VS Code Native Notebook API support.
    NativeNotebook = 'NativeNotebookEditor',
    // Experiment to show native notebook variable in a separate VS Code View.
    NativeVariableView = 'NativeVariableView',
    RemoteJupyter = 'RemoteJupyter',
    // Experiment to show a prompt asking users to join python mailing list.
    MailingListVariant1 = 'pythonJoinMailingListVar1',
    MailingListVariant2 = 'pythonJoinMailingListVar2',
    MailingListVariant3 = 'pythonJoinMailingListVar3'
}
